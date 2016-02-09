__author__ = 'ehan'

def question_five(name):
    employee_list = ["edward", "jocelyn", "charlie", "james", "yizhou"]
    for employee in employee_list:
        if name == employee:
            return True
    return False

def question_four(val):
    for i in range(1, 10):
        print val * i

def question_three(num):
    i = 1
    while i <= num:
        print i
        i += 1

def question_two(temperature):
    if temperature < 0:
        result = "please wear winter jacket!"
    elif temperature >= 0 and temperature <= 15:
        result = "please wear a jacket"
    elif temperature > 15:
        result = "you should be ok without a jacket"
    else:
        result = "invalid input. please input an integer"
    return result

def question_one(x):
    y = x * x + 1
    return y

def main():
    print "----- q1 -----"
    answer1 = question_one(3)
    print answer1

    print "----- q2 -----"
    answer2 = question_two(16)
    print answer2

    print "----- q3 -----"
    question_three(5)

    print "----- q4 -----"
    question_four(3)

    print "----- q5 -----"
    answer5 = question_five("edward")
    print answer5

if __name__ == "__main__":
    main()