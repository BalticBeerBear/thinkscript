declare lower;

def priceUp = close > close[1];

plot Scan = priceUp;

assignBackgroundColor (if Scan >= 1 then color.GREEN else color.BLACK);

scan.assignvaluecolor (if priceUp >= 1 then color.BLACK else color.GREEN);
