
#wizard input: length1
#wizard text: -period
#wizard input: averageType1
#wizard text: crosses
#wizard input: crossingType
#wizard input: length2
#wizard text: -period
#wizard input: averageType2
#wizard text: Price:
#wizard input: price
#wizard input: length3
#wizard text: -period
#wizard input: averageType3

input price = close;
input length1 = 5;
input length2 = 8;
input length3 = 13;
input averageType1 = AverageType.Simple;
input averageType2 = AverageType.Simple;
input averageType3 = AverageType.Simple;
input crossingType = {default above};

def avg1 = MovingAverage(averageType1, price, length1);
def avg2 = MovingAverage(averageType2, price, length2);
def avg3 = MovingAverage(averageType3, price, length3);

plot signal = (avg1 > avg2) and (avg2 > avg3);

assignBackgroundColor (if signal >= 1 then color.BLUE else color.BLACK);

AddLabel(yes, if signal >= 1 then "UP" else "-", color.BLACK);
