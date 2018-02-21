export class Account {
  constructor() {
    this._name = null
    this._age = null
    this._ap = null
    this._fractal = null
    this._wvw = null
    this._status = true
  }

  get name() {
    return this._name
  }
  set name(name) {
    if (typeof name === 'string') this._name = name
    else this._name = null
  }

  get age() {
    return this._age
  }
  set age(age) {
    if (typeof age === 'number') this._age = Math.floor(age)
    else this._age = null
  }

  get ap() {
    return this._ap
  }
  set ap(ap) {
    if (typeof ap === 'number') this._ap = Math.floor(ap)
    else this._ap = null
  }

  get fractal() {
    return this._fractal
  }
  set fractal(fractal) {
    if (typeof fractal === 'number') this._fractal = Math.floor(fractal)
    else this._fractal = null
  }

  get wvw() {
    return this._wvw
  }
  set wvw(wvw) {
    if (typeof wvw === 'number') this._wvw = Math.floor(wvw)
    else this._wvw = null
  }

  get status() {
    return this._status
  }

  set status(status) {
    if (typeof status === 'boolean') this._status = status
    else this._status = true
  }
}

export class Personal {
  constructor() {
    this._name = null
    this._age = null
    this._location = null
    this._bio = null
    this._status = true
  }

  get name() {
    return this._name
  }
  set name(name) {
    if (typeof name === 'string') this._name = name
  }

  get age() {
    return this._age
  }
  set age(age) {
    if (typeof age === 'string') this._age = age
  }

  get location() {
    return this._location
  }
  set location(location) {
    if (typeof location === 'string') this._location = location
  }

  get bio() {
    return this._bio
  }
  set bio(bio) {
    if (typeof bio === 'string') this._bio = bio
  }

  get status() {
    return this._status
  }
  set status(status) {
    if (typeof status === 'boolean') this._status = status
  }
}