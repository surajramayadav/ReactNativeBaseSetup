const HandleLogin = () => {
    console.log('HandleLogin', socket);
    socket.emit('message', socket.id + ' :->> ' + mobile);
    // setMobile('');
  };
  useEffect(() => {
    socket = io('http://192.168.2.105:8080');
    console.log(socket);
    socket.on('message', (msg) => {
      console.log('msg', msg);
      const oldMessages = messages;
      setMessages([...oldMessages, msg]);
    });
    socket.emit('identity', 'loremipsum');
    console.log('App Loaded');
  }, []);
  useEffect(() => {
    console.log('messages', messages);
    // socket.on('connection', () => {
    //   console.log(`I'm connected with the back-end`);
    // });
  });