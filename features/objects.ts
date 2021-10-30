const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 15,
    lng: 20,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const age1 = profile.age;
const { age }: { age: number } = profile;

const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
