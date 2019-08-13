declare lower;

def priceDown = close < close[1];

plot Scan = priceDown;

assignBackgroundColor (if Scan >= 1 then color.RED else color.BLACK);

scan.assignvaluecolor (if priceDown >= 1 then color.BLACK else color.RED);
