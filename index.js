'use strict';

// List extracted from: https://docs.oracle.com/javase/tutorial/java/nutsandbolts/_keywords.html
var reservedKeywords = {
        abstract: true,
        continue: true,
        for: true,
        new: true,
        switch: true,
        assert: true,
        default: true,
        package: true,
        synchronized: true,
        boolean: true,
        do: true,
        if: true,
        private: true,
        this: true,
        break: true,
        double: true,
        implements: true,
        protected: true,
        throw: true,
        byte: true,
        else: true,
        import: true,
        public: true,
        throws: true,
        case: true,
        enum: true,
        instanceof: true,
        return: true,
        transient: true,
        catch: true,
        extends: true,
        int: true,
        short: true,
        try: true,
        char: true,
        final: true,
        interface: true,
        static: true,
        void: true,
        class: true,
        finally: true,
        long: true,
        strictfp: true,
        volatile: true,
        float: true,
        native: true,
        super: true,
        while: true
};

module.exports = function(str) {
    return reservedKeywords.hasOwnProperty(str);
};