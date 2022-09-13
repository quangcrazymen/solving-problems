matrix = [[11 ,2 ,4],
            [4 ,5, 6],
            [10, 8, -12]]

def diagonalDifference(arr):
    # Write your code here
    primary_diagonal = 0
    secondary_diagonal = 0      
    for i in range(0,len(arr)): primary_diagonal += arr[i][i]
    i=0
    while i<len(arr): 
        secondary_diagonal += arr[len(arr)-1-i][i]
        i+=1
    return abs(primary_diagonal-secondary_diagonal)
print(diagonalDifference(matrix))