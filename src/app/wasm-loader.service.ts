import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WasmLoaderService {
  private wasmAdd?: (valA: number, valB: number) => number;
 
  constructor() { this.init(); }
 
  async init(): Promise<void> {
    const wasmBlob = fetch('build/release.wasm');
    const module = await WebAssembly.instantiateStreaming(wasmBlob);
    const exports = module.instance.exports;
    this.wasmAdd = exports['add'] as (valA: number, valB: number) => number;
  }
  
  add(valueA: number, valueB: number): number {
    if (!this.wasmAdd) {
      throw new Error('Wasm Add not initialized');
    }
    return this.wasmAdd(valueA, valueB);
  }
}
