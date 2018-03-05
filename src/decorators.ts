

export function sealed(name: string) {
    return function(target: Function) {
        console.log(`Sealing the constructor: ${name}`);
        Object.seal(target);
        Object.seal(target.prototype);
    };
}

export function logger<T extends Function>(target: T): T {
    const newConst: Function = function() {
        console.log(`Creating new instance ${target}`);
    };
    newConst.prototype = Object.create(target.prototype);
    newConst.prototype.constructor = target;
    return <T>newConst;
}

export function writable(isWritable: boolean) {
    return function(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(`Setting property ${propertyKey}`);
        descriptor.writable = isWritable;
    }
}