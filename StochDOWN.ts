
declare lower;

input KPeriod = 5;
input DPeriod = 3;
input priceH = high;
input priceL = low;
input priceC = close;
input slowing_period = 3;
input averageType = AverageType.SIMPLE;
input showBreakoutSignals = {default "No", "On FullK", "On FullD", "On FullK & FullD"};

def lowest_k = Lowest(priceL, KPeriod);
def c1 = priceC - lowest_k;
def c2 = Highest(priceH, KPeriod) - lowest_k;
def FastK = if c2 != 0 then c1 / c2 * 100 else 0;

def FullK = MovingAverage(averageType, FastK, slowing_period);
def FullD = MovingAverage(averageType, FullK, DPeriod);

plot Data = (FullK < Fulld);

assignBackgroundColor (if Data >= 1 then color.RED else color.BLACK);

data.assignvaluecolor (if Data >= 1 then color.BLACK else color.RED);

AddLabel(yes, if Data >= 1 then "SELL" else "-", color.BLACK);
