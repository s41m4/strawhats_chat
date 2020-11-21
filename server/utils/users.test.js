const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {

  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      username: 'Salma',
      room: 'Node Course'
    }, {
      id: '2',
      username: 'Mohamed',
      room: 'Virtualization Course'
    }, {
      id: '3',
      username: 'Oum Kelthoum',
      room: 'Node Course'
    }];
  });

  it('should add new user', () => {
    const users = new Users();
    const user = {
      id: '123',
      username: 'Amine',
      room: 'Playground'
    };

    const resUser = users.addUser(user.id, user.username, user.room);
    
    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    const userId = '1';
    const user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    const userId = '42';
    const user = users.removeUser(userId);

    expect(user).toNotExist;
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    const userId = '2';
    user = users.getUser(userId);

    expect(userId).toBe(userId);
  });

  it('should not find user', () => {
    const userId = '42';
    user = users.getUser(userId);

    expect(userId).toBe(userId);
  });

  it('should return names for node course', () => {
    const userList = users.getUserList('Node Course');
    expect(userList).toEqual(['Salma', 'Oum Kelthoum']);
  });

  it('should return names for react course', () => {
    const userList = users.getUserList('Virtualization Course');
    expect(userList).toEqual(['Zeineb']);
  });
});
