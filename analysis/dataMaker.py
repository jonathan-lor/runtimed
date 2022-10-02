import random
import math
import matplotlib.pyplot as plt
file = open('cubic.csv', 'a')

x = [i for i in range(1,31)]
y = [i**3 + 2 * i**2 + 3 * i for i in x]

# randNum = random.random() * 10
# print(randNum)

y = [i + i * random.random() * .1 for i in y]

print(x)
print(y)

plt.plot(x,y)
plt.show()

for i in range(0,30):
    file.write(str(x[i]))
    file.write(",")
    file.write(str(y[i]))
    file.write('\n')

file.close()