function customPromiseAll(promises) {

    return new Promise((resolve, reject) => {

        let results = [];
        let completed = 0;

        if (promises.length === 0) {
            resolve(results);
        }

        for (let i = 0; i < promises.length; i++) {

            Promise.resolve(promises[i])

                .then((data) => {

                    results[i] = data;

                    completed++;

                    if (completed === promises.length) {
                        resolve(results);
                    }

                })

                .catch((error) => {
                    reject(error);
                });

        }

    });

}

let prom1 = new Promise((resolve) => {

    setTimeout(() => {

        resolve("Promise1 is being resolved");

    }, 1000);

});

let prom2 = new Promise((resolve) => {

    setTimeout(() => {

        resolve("Promise2 is being Resolved");

    }, 1000);

});


customPromiseAll([prom1, prom2])

    .then((data) => {

        console.log("Promises resolves");

        console.log(data);

    })

    .catch((error) => {

        console.log("promsis is not being resolved", error);

    });