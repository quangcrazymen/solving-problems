# https://www.hackerrank.com/challenges/picking-numbers/problem
string = "4 2 3 4 4 9 98 98 3 3 3 4 2 98 1 98 98 1 1 4 98 2 98 3 9 9 3 1 4 1 98 9 9 2 9 4 2 2 9 98 4 98 1 3 4 9 1 98 98 4 2 3 98 98 1 99 9 98 98 3 98 98 4 98 2 98 4 2 1 1 9 2 4"
numbers = [4 ,6, 5, 3, 3, 1]
numbers = [1 ,2, 2 ,3, 1, 2]
numbers = list(map(int,string.split()))
def pickingNumbers(a):
    # Write your code here
    a.sort()
    max = 0
    unique_numbers = list(set(a))
    index = 0
    temp = 0
        
print(pickingNumbers(numbers))