/* eslint-disable @typescript-eslint/no-explicit-any */
export function Log(
  _target: any,
  propertyName: string,
  propertyDescriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = propertyDescriptor.value;

  propertyDescriptor.value = function (...args: any[]) {
    console.log(`Calling ${propertyName} with args:`, args);
    return originalMethod.apply(this, args);
  };

  return propertyDescriptor;
}
