var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Something_length, _Something_width;
export class Something {
    constructor(length, width) {
        _Something_length.set(this, void 0);
        _Something_width.set(this, void 0);
        __classPrivateFieldSet(this, _Something_length, length, "f");
        __classPrivateFieldSet(this, _Something_width, width, "f");
    }
    get length() { return __classPrivateFieldGet(this, _Something_length, "f"); }
    set length(l) { __classPrivateFieldSet(this, _Something_length, l, "f"); }
    get width() { return __classPrivateFieldGet(this, _Something_width, "f"); }
    set(w) { __classPrivateFieldSet(this, _Something_width, w, "f"); }
    area() { return __classPrivateFieldGet(this, _Something_length, "f") * __classPrivateFieldGet(this, _Something_width, "f"); }
    ratio1() { return __classPrivateFieldGet(this, _Something_length, "f") / __classPrivateFieldGet(this, _Something_width, "f"); }
    ratio2() { return __classPrivateFieldGet(this, _Something_width, "f") / __classPrivateFieldGet(this, _Something_length, "f"); }
}
_Something_length = new WeakMap(), _Something_width = new WeakMap();
export function mkSomething(length, width) {
    return new Something(length, width);
}
export function FAIL(msg) {
    throw new Error(msg);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xpYi9leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBLE1BQU0sT0FBTyxTQUFTO0lBRWxCLFlBQVksTUFBYyxFQUFFLEtBQWE7UUFLekMsb0NBQWdCO1FBQ2hCLG1DQUFlO1FBTFgsdUJBQUEsSUFBSSxxQkFBVyxNQUFNLE1BQUEsQ0FBQztRQUN0Qix1QkFBQSxJQUFJLG9CQUFVLEtBQUssTUFBQSxDQUFDO0lBQ3hCLENBQUM7SUFLRCxJQUFJLE1BQU0sS0FBSyxPQUFPLHVCQUFBLElBQUkseUJBQVEsQ0FBQyxDQUFDLENBQUM7SUFDckMsSUFBSSxNQUFNLENBQUMsQ0FBUyxJQUFJLHVCQUFBLElBQUkscUJBQVcsQ0FBQyxNQUFBLENBQUMsQ0FBQyxDQUFDO0lBRTNDLElBQUksS0FBSyxLQUFLLE9BQU8sdUJBQUEsSUFBSSx3QkFBTyxDQUFDLENBQUMsQ0FBQztJQUNuQyxHQUFHLENBQUMsQ0FBUyxJQUFJLHVCQUFBLElBQUksb0JBQVUsQ0FBQyxNQUFBLENBQUMsQ0FBQyxDQUFDO0lBRW5DLElBQUksS0FBSyxPQUFPLHVCQUFBLElBQUkseUJBQVEsR0FBRyx1QkFBQSxJQUFJLHdCQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzdDLE1BQU0sS0FBSyxPQUFPLHVCQUFBLElBQUkseUJBQVEsR0FBRyx1QkFBQSxJQUFJLHdCQUFPLENBQUMsQ0FBQyxDQUFDO0lBQy9DLE1BQU0sS0FBSyxPQUFPLHVCQUFBLElBQUksd0JBQU8sR0FBRyx1QkFBQSxJQUFJLHlCQUFRLENBQUMsQ0FBQyxDQUFDO0NBRWxEOztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUMsTUFBYyxFQUFFLEtBQWE7SUFDckQsT0FBTyxJQUFJLFNBQVMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQUVELE1BQU0sVUFBVSxJQUFJLENBQUMsR0FBVztJQUM1QixNQUFNLElBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjbGFzcyBTb21ldGhpbmcge1xuXG4gICAgY29uc3RydWN0b3IobGVuZ3RoOiBudW1iZXIsIHdpZHRoOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy4jbGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLiN3aWR0aCA9IHdpZHRoO1xuICAgIH1cblxuICAgICNsZW5ndGg6IG51bWJlcjtcbiAgICAjd2lkdGg6IG51bWJlcjtcblxuICAgIGdldCBsZW5ndGgoKSB7IHJldHVybiB0aGlzLiNsZW5ndGg7IH1cbiAgICBzZXQgbGVuZ3RoKGw6IG51bWJlcikgeyB0aGlzLiNsZW5ndGggPSBsOyB9XG5cbiAgICBnZXQgd2lkdGgoKSB7IHJldHVybiB0aGlzLiN3aWR0aDsgfVxuICAgIHNldCh3OiBudW1iZXIpIHsgdGhpcy4jd2lkdGggPSB3OyB9XG5cbiAgICBhcmVhKCkgeyByZXR1cm4gdGhpcy4jbGVuZ3RoICogdGhpcy4jd2lkdGg7IH1cbiAgICByYXRpbzEoKSB7IHJldHVybiB0aGlzLiNsZW5ndGggLyB0aGlzLiN3aWR0aDsgfVxuICAgIHJhdGlvMigpIHsgcmV0dXJuIHRoaXMuI3dpZHRoIC8gdGhpcy4jbGVuZ3RoOyB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1rU29tZXRoaW5nKGxlbmd0aDogbnVtYmVyLCB3aWR0aDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG5ldyBTb21ldGhpbmcobGVuZ3RoLCB3aWR0aCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBGQUlMKG1zZzogc3RyaW5nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG59Il19