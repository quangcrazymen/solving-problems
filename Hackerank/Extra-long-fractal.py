def fractal(n):
    result = 1
    for i in range(1,n+1):
        result = result * i
    return result
print(fractal(3))
print(fractal(4))
print(fractal(0))
print(fractal(25))
print(fractal(45))


