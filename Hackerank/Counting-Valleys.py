def countingValleys(steps, path):
    # Write your code here
    valleys = 0
    level = 0
    for i,direction in enumerate(path):
        if direction == 'U': level +=1
        else: level -=1
        if(level==-1 and direction=='D'): valleys +=1  
    return valleys

print(countingValleys(8,'UDDDUDUU'))
print(countingValleys(8,'DDUUDDUDUUUD'))
