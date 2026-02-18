GEC
CP: 
    message: undefined
    sum: f() in memory
    mul: f() in memory
    calc: f() in memory
    getResult: f() in memory
EP:
    message: "I can do it"
    getResult: Execute
    FEC(for getResult())
    CP:
        a: undefined
        b: undefined
        arguments: {0:8, 1:5}
    EP:
        a:8
        b:5
        calc: Execute
        FEC(for calc())
        CP:
            a: undefined
            b: undefined
            arguments: {0:8, 1:5}
        EP:
            a: 8
            b: 5
            sum: Execute
            FEC(for sum())
            CP:
                a: undefined
                b: undefined
                result: undefined
                arguments: {0:8, 1:5}
            EP:
                a: 8
                b: 5
                result: 13
                Return: 13 to calc()
            mul: Execute
            FEC(for mul())
            CP:
                a: undefined
                b: undefined
                result: undefined
                arguments: {0:8, 1:5}
            EP:
                a: 8
                b: 5
                result: 40
                Return: 40 to calc()
            Return: 26.5 to getResult()
        Return: 26.5 to GEC
    Return: 26.5


