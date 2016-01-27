def climb(n):
    '''
    For every positive integer N, there exists a unique sequence starting with 1
    and ending with N and such that every number in the sequence is either the
    double of the preceeding number or the double plus 1. For example, given N = 13,
    the sequence is [1, 3, 6, 13].

    Write a function that returns this sequence given a possitive number N. Try
    generating the elements of the resulting list in ascending order, i.e., without
    resorting to a list reversal or prepending the elements to a list.
    '''
    a, b, c = n, 1, 0
    while b <= n:
        b <<= 1
    results = []
    while b > 1:
        b >>= 1
        c <<= 1
        if b <= a:
            c += 1
            a -= b
        results.append(c)
    return results
