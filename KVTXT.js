export const KVTXT = {
  decode: (txt) => {
    const ss = txt.split("\n");
    const res = {};
    for (let i = 0; i < ss.length; i++) {
      const s = ss[i];
      if (s.length == 0) {
        continue;
      }
      const n = s.indexOf(": ");
      if (n == 0) {
        throw new Error("can't null key: " + s);
      } else if (n > 0) {
        const key = s.substring(0, n);
        const val = s.substring(n + 2);
        res[key] = val.trim();
      } else if (s.endsWith(":")) {
        const key = s.substring(0, s.length - 1);
        const vals = [];
        for (i++; i < ss.length; i++) {
          const s = ss[i];
          if (s.indexOf(": ") >= 0 || s.endsWith(":")) {
            const s2 = s.replace(/\\:/g, ":");
            if (s == s2) {
              i--;
              break;
            }
            vals.push(s2);
          } else {
            vals.push(s);
          }
        }
        const val = vals.join("\n");
        res[key] = val.trim();
      } else {
        throw new Error("illegal line: " + s);
      }
    }
    return res;
  },
};
