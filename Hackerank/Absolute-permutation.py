from xml.etree.ElementTree import ElementTree


n = 4
k = 2 

# maybe try to use recursion
# https://www.baeldung.com/cs/array-generate-all-permutations

def absolutePermutation(n,k):
    elements = [i for i in range(1,n+1)]
    for i in range(0,n-1):
        for j in range(i+1,n):
            temp = []
            for e in elements:
                if e == elements[i] | e==elements[j]: temp.append(0)
                else: temp.append(e)
            temp[j]=elements[i]
            temp[i]=elements[j]
            print(temp)


absolutePermutation(n,k)
print('original')
print([i for i in range(1,n+1)])