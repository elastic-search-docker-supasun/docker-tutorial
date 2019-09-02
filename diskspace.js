var ds = require('fd-diskspace');
 
// Async 
ds.diskSpace(function(err, res){
    if(err) throw err;
 
    console.log(res.disks[/]);
});
 
// Sync 
// var statsSync = ds.diskSpaceSync();
// console.log(statsSync);
 
// Linux output: 
/*
{
  total: {
    free: 24074004,
    size: 31069279,
    used: 6995275,
    percent: 0.22515086365538126
  },
  disks: {
    '/': {
      free: 23647712,
      size: 30572556,
      used: 6924844,
      percent: 0.22650523561065683
    },
    '/dev/shm': {
      free: 251044,
      size: 251044,
      used: 0,
      percent: 0
    },
    '/boot': {
      free: 175248,
      size: 245679,
      used: 70431,
      percent: 0.28667895912959596
    }
  }
}
 */
