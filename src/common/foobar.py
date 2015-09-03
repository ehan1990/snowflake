__author__ = 'Edward'

class Bunch(object):
    def __init__(self, adict):
        self.__dict__.update(adict)

def main():
    d = {
        "name": "edward",
        "age": 15
    }
    c = Bunch(d)
    print c.age
if __name__ == "__main__":
    main()