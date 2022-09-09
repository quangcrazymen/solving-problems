# import numpy as np
# a = np.array([1,2,3,4])
# b = np.array([2,3,3,4])
# print(a-b)

#### FIRST SOLUTION #####
def distances(a,b):
    return (a-b)//2
# Complete the flatlandSpaceStations function below.
def flatlandSpaceStations(n, c):
    c.sort()
    temp = c.copy()
    temp.pop(0)
    result = list(map(distances,temp,c))
    if 0 not in c: result.append(c[0])
    if n not in c: result.append(n-1-c[len(c)-1])
    return max(result)

print(flatlandSpaceStations(20 ,[13,1, 11, 10, 6]))
print(flatlandSpaceStations(100,[93, 41, 91, 61, 30, 6, 25, 90, 97]))
# expected output 14