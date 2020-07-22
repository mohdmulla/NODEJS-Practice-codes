Following code demonstrates running terminal commmand using node js. Two functions we have used here are exec() and spawn() function. 

The exec() function creates a new shell and executes a given command. The output from the execution is buffered, which means kept in memory, and is available for use in a callback.

The spawn() function executes a command in a new process. This function uses a Stream API, so its output of the command is made available via listeners.

When to use exec and spawn?
The key difference between exec() and spawn() is how they return the data. As exec() stores all the output in a buffer, it is more memory intensive than spawn(), which streams the output as it comes.

Generally, if you are not expecting large amounts of data to be returned, you can use exec() for simplicity. Good examples of use-cases are creating a folder or getting the status of a file. However, if you are expecting a large amount of output from your command, then you should use spawn(). A good example would be using command to manipulate binary data and then loading it in to your Node.js program.


source : https://stackabuse.com/executing-shell-commands-with-node-js/