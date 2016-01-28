def arithmetic_sequence_elements(a, r, n):
    '''
     You have decided to write a function arithmetic_sequence_elements(a, r, n) that will print first n elementh of the sequence with the given common difference r and first elementh a, separated by comma and space.
    '''
    result = [str(a)]
    while len(result) < n:
        a += r
        result.append(str(a))

    return ', '.join(result)
