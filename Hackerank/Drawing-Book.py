def pageCount(n, p):
    # Write your code here
    forward = p//2
    backward = n//2 - forward
    if(forward>=backward):return backward
    else: return forward
print(pageCount(5,3))
print(pageCount(6,2))
print(pageCount(5,4))

