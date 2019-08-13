declare lower;

input emaLength = 8;

def emaValue = ExpAverage (close, emaLength);

def priceAboveEMA = close > emaValue;

plot Scan = priceAboveEMA;

assignBackgroundColor (if Scan >= 1 then color.GREEN else color.BLACK);

scan.assignvaluecolor (if priceAboveEMA >= 1 then color.BLACK else color.GREEN);
