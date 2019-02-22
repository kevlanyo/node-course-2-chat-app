const expect = require('expect');
const {Users} = require('./users');

describe('Users',()=>{
    var users;

    beforeEach(()=>{
        users = new Users();
        users.users =[{
            id:1,
            name:'Mike',
            room:'Node Course'
        },{
            id:2,
            name:'Kevin',
            room:'React Course'
        },{
            id:3,
            name:'Julie',
            room:'Node Course'
        }];
    });

    it('should add new user',()=>{
        var users = new Users();
        var user = {
            id:345,
            name:'Kevin',
            room:'Emory'
        };
        var resUser = users.addUser(user.id,user.name,user.room);

        expect(users.users).toEqual([user]);
    });

    it('should return names for node course', ()=>{
        var userlist = users.getUserList('Node Course');

        expect(userlist).toEqual(['Mike','Julie']);
    });

    it('should remove a user', ()=>{
        var userID = 1;
        var user = users.removeUser(userID);
 
        expect(user.id).toBe(userID);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', ()=>{
        var userID = 10;
        var user = users.removeUser(userID);
 
        expect(user).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('should find user',()=>{
       var userID = 1;
       var user = users.getUser(userID);

       expect(user.id).toBe(userID);
    });

    it('should not find user',()=>{
        var userID = 10;
       var user = users.getUser(userID);

       expect(user).toNotExist();
    });

    it('should return names for React course', ()=>{
        var userlist = users.getUserList('React Course');

        expect(userlist).toEqual(['Kevin']);
    });
})