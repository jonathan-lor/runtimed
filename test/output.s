	.file	"program.cpp"
	.text
	.local	_ZStL8__ioinit
	.comm	_ZStL8__ioinit,1,1
	.section	.rodata
.LC0:
	.string	"hello world"
	.text
	.globl	_Z9main_realiPPc
	.type	_Z9main_realiPPc, @function
_Z9main_realiPPc:
.LFB1731:
	.cfi_startproc
    
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	endbr64
    
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	pushq	%rbp

	.cfi_def_cfa_offset 16
	.cfi_offset 6, -16
    
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	movq	%rsp, %rbp

	.cfi_def_cfa_register 6

	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	subq	$16, %rsp

	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	movl	%edi, -4(%rbp)

	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	movq	%rsi, -16(%rbp)

	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	leaq	.LC0(%rip), %rax

	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	movq	%rax, %rdi
	movq %r13, __r13_save(%rip)
    
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	call	puts@PLT
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	movl	$0, %eax
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	leave
	.cfi_def_cfa 7, 8
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	ret
	.cfi_endproc
.LFE1731:
	.size	_Z9main_realiPPc, .-_Z9main_realiPPc
	.type	_Z41__static_initialization_and_destruction_0ii, @function
_Z41__static_initialization_and_destruction_0ii:
.LFB2226:
	.cfi_startproc
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	endbr64
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	pushq	%rbp
	.cfi_def_cfa_offset 16
	.cfi_offset 6, -16
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	movq	%rsp, %rbp
	.cfi_def_cfa_register 6
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	subq	$16, %rsp
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	movl	%edi, -4(%rbp)
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	movl	%esi, -8(%rbp)
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	cmpl	$1, -4(%rbp)
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	jne	.L5
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	cmpl	$65535, -8(%rbp)
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	jne	.L5
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	leaq	_ZStL8__ioinit(%rip), %rax
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	movq	%rax, %rdi
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	call	_ZNSt8ios_base4InitC1Ev@PLT
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	leaq	__dso_handle(%rip), %rax
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	movq	%rax, %rdx
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	leaq	_ZStL8__ioinit(%rip), %rax
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	movq	%rax, %rsi
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	movq	_ZNSt8ios_base4InitD1Ev@GOTPCREL(%rip), %rax
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	movq	%rax, %rdi
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	call	__cxa_atexit@PLT
.L5:
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	nop
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	leave
	.cfi_def_cfa 7, 8
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	ret
	.cfi_endproc
.LFE2226:
	.size	_Z41__static_initialization_and_destruction_0ii, .-_Z41__static_initialization_and_destruction_0ii
	.type	_GLOBAL__sub_I__Z9main_realiPPc, @function
_GLOBAL__sub_I__Z9main_realiPPc:
.LFB2227:
	.cfi_startproc
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	endbr64
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	pushq	%rbp
	.cfi_def_cfa_offset 16
	.cfi_offset 6, -16
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	movq	%rsp, %rbp
	.cfi_def_cfa_register 6
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	movl	$65535, %esi
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	movl	$1, %edi
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	call	_Z41__static_initialization_and_destruction_0ii
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	popq	%rbp
	.cfi_def_cfa 7, 8
	movq %r13, __r13_save(%rip)
	movq __instruction_counter(%rip), %r13
	leaq 1(%r13), %r13
	movq %r13, __instruction_counter(%rip)
	movq %r13, __r13_save(%rip)
	ret
	.cfi_endproc
.LFE2227:
	.size	_GLOBAL__sub_I__Z9main_realiPPc, .-_GLOBAL__sub_I__Z9main_realiPPc
	.section	.init_array,"aw"
	.align 8
	.quad	_GLOBAL__sub_I__Z9main_realiPPc
	.hidden	__dso_handle
	.ident	"GCC: (Ubuntu 11.2.0-19ubuntu1) 11.2.0"
	.section	.note.GNU-stack,"",@progbits
	.section	.note.gnu.property,"a"
	.align 8
	.long	1f - 0f
	.long	4f - 1f
	.long	5
0:
	.string	"GNU"
1:
	.align 8
	.long	0xc0000002
	.long	3f - 2f
2:
	.long	0x3
3:
	.align 8
4:
