declare lower;

input emaLength = 8;

def emaValue = ExpAverage (close, emaLength);

def priceBelowEMA = close < emaValue;

plot Scan = priceBelowEMA;

assignBackgroundColor (if Scan >= 1 then color.RED else color.BLACK);

scan.assignvaluecolor (if priceBelowEMA >= 1 then color.BLACK else color.RED);
