function stylesheet(hostSelector, shadowSelector, nativeShadow) {
  return "[dir=\"ltr\"] {order: 0;}\n[dir=\"ltr\"] test" + shadowSelector + " {order: 1;}\n[dir=\"ltr\"] test" + shadowSelector + " {order: 2;}\n[dir=\"ltr\"] test" + shadowSelector + " {order: 3;}\n[dir=\"ltr\"] test" + shadowSelector + " test" + shadowSelector + " {order: 4;}\n[dir=\"rtl\"] {order: 5;}\n[dir=\"rtl\"] test" + shadowSelector + " {order: 6;}\n[dir=\"rtl\"] test" + shadowSelector + " {order: 7;}\n[dir=\"rtl\"] test" + shadowSelector + " {order: 8;}\n[dir=\"rtl\"] test" + shadowSelector + " test" + shadowSelector + " {order: 9;}\n";
}
export default [stylesheet];