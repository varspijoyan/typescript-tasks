// stexcel user tipi object , user tipi 2 popoxakan
// 2 mard hashvel mijin tariqnery, cankov stanal anunnnery - grel funkciayi mej
type User = {
  name: string;
  age: number;
};

const userA: User = {
  name: "Jane",
  age: 20,
};

const userB: User = {
  name: "Jack",
  age: 30,
};

const userC: User = {
  name: "Sam",
  age: 25,
};

function findAverageAge(users: User[]): number {
  return users.reduce((sum, user) => sum + user.age, 0) / users.length;
}

function getUserNames(users: User[]): string[] {
  return users.map((user) => {
    return user.name;
  });
}

const users = [userA, userB, userC];

const result1 = findAverageAge(users);
console.log(result1);

const result2 = getUserNames(users);
console.log(result2);
