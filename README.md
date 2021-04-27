#Setup papaoptom

1. Environment
```
1. MongoDB
2. NodeJs
3. pm2
4. Linux Centos7
```

1.1. Setup mongodb
```
Step 1: ssh root@host
Step 2: 
    cd /etc/yum.repo.d/
    vim mongodb-org-3.2.repo
    
    Paste shown below
    [mongodb-org-3.2]
    name=MongoDB Repository
    baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.2/x86_64/
    gpgcheck=1
    enabled=1
    gpgkey=https://www.mongodb.org/static/pgp/server-3.2.asc
Step 3: Install mongodb
    yum repolist
    yum -y install mongodb-org
Step 4: Start service
    systemctl start mongod
Step 5: Check used port 27017
    netstat -plntu
    systemctl status mongod
```
1.2. Setup nodejs
```
Step 1: Update system
    sudo yum -y update
Step 2:  Install Node.js 12 LTS on CentOS 7
    curl -sL https://rpm.nodesource.com/setup_12.x | sudo bash -
Step 3: Install nodejs
    sudo yum clean all && sudo yum makecache fast
    sudo yum install -y gcc-c++ make
    sudo yum install -y nodejs
Step 4: check version
    node -v
    npm -v
```

1.3. Setup pm2

```
Note: Must finished 1.1 and 1.2
Step 1: sudo npm i -g pm2
```

1.4. Setup papaoptom
```
Step 1: Create source folder
    sudo mkdir papaoptom
    cd papaoptom/
Step 2: Get source code from github
    git pull origin [git repo]
    cd [git repo name]
    npm install
Step 3: Run service
    pm2 start npm --name papaoptom - run start
step 4: Check papaoptom
    lsof -i :[port]
```