class Iterator {
    /**
     * 无条件遍历整个数组或对象。
     */
    static each(obj, cb, $this) {
        /* eslint-disable no-param-reassign */
        $this = $this || {};
        /* eslint-enable no-param-reassign */
        let ii;
        if (obj instanceof Array) {
            if (obj.forEach) return obj.forEach(cb, $this);
            for (ii = 0; ii < obj.length; ii++) {
                if (cb) cb.call($this, obj[ii], ii, obj);
            }
        } else {
            for (ii in obj) {
                if ({}.hasOwnProperty.call(obj, ii)) {
                    if (cb) cb.call($this, obj[ii], ii, obj);
                }
            }
        }
        return undefined;
    }
}

module.exports = Iterator;