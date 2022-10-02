import matplotlib.pyplot as plt
import numpy as np
import csv
# import math
from math import log
from pandas import read_csv
from scipy.optimize import curve_fit

# file = open("text.csv")
# dataframe = read_csv("quad.csv", header=None)
# data = dataframe.values
# x = data[:, 0]
# y = data[:, 1]
# print("Data: ", data)
# print("x: ", x)
# print("y: ", y)
# print()
# global x = []
# y = []
def loadData(fileName):
    dataframe = read_csv(fileName, header=None)
    data = dataframe.values
    global x
    global y
    x = data[:, 0]
    y = data[:, 1]

def constModel(x, a):
    return a
def linearModel(x, a, b):
    return a * x + b
def quadModel(x, a, b, c):
    return c + b * x + a * (x**2)
def cubedModel(x, a, b , c ,d):
    return d + c * x + b * (x ** 2) + a * (x**3)
def logModel(x, a, b, c):
    return a + np.log2(b) * np.log2(x) + c

def fitModel(model):
    if model == linearModel:
        f = linearModel
        degree = 1
        popt, _ = curve_fit(f, x, y)
        a, b = popt
    elif model == quadModel:
        f = quadModel
        degree = 2
        popt, _ = curve_fit(f, x, y)
        a, b, c = popt
    elif model == cubedModel:
        f = cubedModel
        degree = 3
        popt, _ = curve_fit(f, x, y)
        a, b, c, d = popt
    elif model == logModel:
        f = logModel
        degree = 0
        popt, _ = curve_fit(f, x, y)
        a, b, c = popt
    elif model == constModel:
        f = constModel
        degree = 0
        popt, _ = curve_fit(f, x, y)
        a = popt

    # popt, _ = curve_fit(f, x, y)
    # a, b, c = popt
    n = len(x)
    residuals = y - f(x, *popt)
    ss_res = np.sum(residuals ** 2)
    ss_tot = np.sum((y - np.mean(y)) ** 2)
    ss_err = ss_tot - ss_res
    # BIC = n * math.log(ss_err) + degree * log(n)
    r_squared = 1 - (ss_res / ss_tot)
    # print(ss_res, ss_tot)
    if r_squared == 0:
        r_squared = 0
    print()
    print(f'                   R^2:   {r_squared}')
    if f == quadModel or f == cubedModel or f == linearModel:
        adj_r_sq = 1 - (((1 - r_squared) * (n - 1)) / (n - degree - 1))
        aic = n * log(ss_err) + degree * 2
        bic = n * log(ss_err) + degree * log(n)
        print(f'    Adjusted R squared:   {adj_r_sq}')
        print(f'                   AIC: {bic}')
        print(f'                   BIC: {aic}')
        return (adj_r_sq, bic)
    return (r_squared, 10000)



# fitModel(linearModel)
# fitModel(quadModel)
# fitModel(cubedModel)
# fitModel(logModel)
# fitModel(constModel)

def testAll(file):
    loadData(file)
    max = 0
    min = 1000
    bestModel = "none"
    fit, b = fitModel(linearModel)
    if b < min or fit > max:
        max = fit
        min = b
        bestModel = "Linear"
    fit, b = fitModel(quadModel)
    if b < min or fit > max:
        max = fit
        min = b
        bestModel = "Quadratic"
    fit, b = fitModel(cubedModel)
    if b < min or fit > max:
        max = fit
        min = b
        bestModel = "Cubic"
    fit, _ = fitModel(logModel)
    if fit > max:
        max = fit
        bestModel = "Log"
    fit, _ = fitModel(constModel)
    if fit > max:
        max = fit
        bestModel = "Constant"
    # print(max)
    print(f'The best model for {file} is {bestModel}.  (max: {max}  min: {min})')

# testAll("linear.csv")
# testAll("quad.csv")
# testAll("const.csv")
# testAll("cubic.csv")
# testAll("log.csv")

