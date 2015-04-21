// Type definitions for Stats.js r12
// Project: http://github.com/mrdoob/stats.js
// Definitions by: Gregory Dalton <https://github.com/gregolai>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare class Stats { 
	REVISION: number;
	domElement: HTMLDivElement;
	public setMode(value: number) : void;
	public begin() : void;
	public end() : number;
	public update() : void;
}