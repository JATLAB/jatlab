# JATLAB
JATLAB: Use your browser as Scientific Calculator [jatlab.github.io](http://jatlab.github.io/)

## Motivation
Lots of people with Engineering background like myself have used MATLAB for many years, not just for official projects, but also frequently as a quick calculator. 

Unfortunately, with each new version, MATLAB has become more and more bloated with rarely used buttons and features, resulting in longer and longer load times, sluggish performance with heavy memory/CPU usage. Also, the MATLAB license has become more expensive and restrictive, and as a result it is not as widely available as before. 

Finding myself having have to use much lessor alternatives like the Windows' calculator program, an idea came to me.

## Features
With JATLAB, from modern Desktop web browsers (Chrome,Edge,etc) load [jatlab.github.io](http://jatlab.github.io/) then **press F12 key** to open Developer Console to instantly do over ~95% of things you used to do in MATLAB: 

- All Javascript math functions available in Math.* can be used *without* typing `Math.` in front, such as:
	- `sin`,`cos`,`tan`,`exp`,`log10`,`log`,`sqrt`,...
	- Most of these functions are extended to *accept 1D or 2D array as input* and returns 1D or 2D array
- Most commonly used MATLAB features are availble:
	- Plotting: `plot`,`figure`,`close`,`holdon`,`holdoff`,`legend`,`xlabel`,`ylabel`,`title`,`semilogx`,`semilogy`,`loglog`
	- Some 3D Plotting: `contour`,`heatmap`
	- Saving and loading CSV files: `csvread`,`csvwrite`
	- FFT: `fft`,`hanning`
	- Many MATLAB statistic functions such as `rms`,`mean`,`abs`, `sum`, `max`, `min`. They support 1D array of real or complex (2 element array) numbers. 	
	- Complex numbers: `abs`,`angle`,`real`,`imag`. Complex numbers are in the 2-element array *[real_part, imag_part]*. 
	- `rand`,`randn`,`linspace`,`logspace`,`ode23`

MATLAB is vast, but I hope over time people will contribute their expertise to this project to expand these features. 

## Examples

### Basic Plotting
```js
x=linspace(0,2*PI); plot(x,sin(x));
holdon(); plot(x,cos(x),'red');
legend('sin','cos');
```
[![Basic plot example](example1.png)](http://jatlab.github.io/)

### Basic Arithmetic of Arrays
Unfortunately Javascript does not allow elementwise "+" or "*" for vector/arrays like MATLAB. So for arrays, do the following instead:
```js
a=[1,2,3]; b=[5,5,5]; 
scale(a,2)    // [2, 4, 6]
add(a,b)	  // [6, 7, 8]
scale(a,b)	  // [5, 10, 15]
dot(a,b)	  // 30
```

### 3D Plotting of Time Marched Burger's Equation dy/dt = -y*dy/dx
```js
function dwdt(t,y){
let n=y.length; let dx=1/n; 
return y.map( (yu,i)=>-yu*(y[(i+1)%n]-y[i])/2/dx );
}

let tspan = linspace(0,0.32,100); 
let y0=sin(linspace(0,2*PI,100));
let y=ode23(dwdt, tspan, y0);
heatmap(y);
xlabel('x'); ylabel('Time');
```
[![3D plot example](example2.png)](http://jatlab.github.io/)

### Saving and Loading CSV Files
```js
csvwrite(y,'burger.csv');
```
[![Download example|300](download_example.png)](http://jatlab.github.io/)
Later
```js
let yt = await csvread();
heatmap(log(yt.map(y=>add(y,1.1))))
xlabel('x'); ylabel('Time'); zlabel('log(y+1.1)');
```
This produces the same plot except in log scale. 
[![3D plot example 2](example3.png)](http://jatlab.github.io/)

Note that due to security Javascript is not allowed to read programmatically generated file name, the user needs to manually select the CSV file using File chooser.

### FFT Plot of Delta-Sigma Modulator
```js
var accum=0;
function dsm(vin){
	accum= accum+vin;
	if(accum>1+randn()*1e-3){
		accum-=1; return 1;
	}else return 0;
}
let vin = add(0.5,scale(0.5,sin(linspace(0,100*PI,65536))));
let dout = vin.map((vin)=>dsm(vin));
plot(dout); holdon(); plot(vin,'red');
```
[![DSM example](dsm_example.png)](http://jatlab.github.io/)

```js
figure(2);
semilogx(scale(20,log10(abs(fft(dout)))));
ylabel('dB')
```

[![FFT example](fft_example.png)](http://jatlab.github.io/)

