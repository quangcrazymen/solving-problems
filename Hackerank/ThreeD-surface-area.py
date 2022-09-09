from copy import copy, deepcopy


blocks = [[1,3,4],
        [2,3,3],
        [1,2,4]]
blocks = [[94],
[91],
[97],
[97],
[100],
[90],
[95],
[95],
[93],
[91]]
def init(A):
    # init function with surround 0 value
    # e.g 0 0 0
    #     0 2 0
    #     0 0 0 
    length = deepcopy(len(A))
    for i in A:
        i.append(0)
        i.insert(0,0)
    A.append([0]*len(A[0]))
    A.insert(0,([0]*(len(A[0]))))
    return(A)

def loss(a,b):
    if (a>=b): return b
    else: return a
def surfaceArea(A):
    A = init(A)
    result = 0
    for i in range(1,len(A)-1):
        for j in range(1,len(A[0])-1):
            # calculate the loss by adjacent neighbors
            result = result + (6 * A[i][j] -2*(A[i][j]-1) - #loss by stacking up on itself
                               loss(A[i][j],A[i-1][j]) -    #up
                               loss(A[i][j],A[i+1][j]) -   #down
                               loss(A[i][j],A[i][j-1]) -    #left
                                loss(A[i][j],A[i][j+1]))    #right
    return result

print(surfaceArea(blocks))