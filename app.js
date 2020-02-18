const response1 = `
  Raul's request for Mx. Promise represents the common need of our applications to fetch data out in the internet. Promises allow us to execute tasks like this asynchronously, meaning the program can continue running as seen in the analogy when Raul proceeds to prepare itemB. JavaScript also allows us to declare callback functions that execute upon the resolution of the promise. This is similar to Raul asking Mx. Promise to follow specific steps if they are able to find the item or not.
`;

const logUsers = () => {
  const userReq = fetch("https://randomuser.me/api/?results=500")
    .then((res) => { return res.json() })
    .then((parsedRes) => { console.log(parsedRes.results) });
};

logUsers();

const listTenNames = () => {
  const nameReq = fetch("https://randomuser.me/api/?results=10")
    .then((res) => res.json())
    .then((userDat) => {
      const users = userDat.results;
      for (let i = 0; i < users.length; i++) {
        console.log(
          i + ': ' +
          users[i].name.first + " " +
          users[i].name.last
        );
      }
    });
};

listTenNames();

const createPhoneBook = () => {
  const phonesList = document.createElement('ul')
  const phoneReq = fetch("https://randomuser.me/api/?results=25")
    .then((res) => res.json())
    .then((userDat) => {
      const listItems = userDat.results.map((user) => {
        const name = user.name;
        return `
        <li>
        ${name.first} ${name.last}: ${user.phone}
        </li>
        `;
      });
      listItems.forEach((item) => {
        phonesList.innerHTML += item;
      });
      document.body.appendChild(phonesList);
    });
};

createPhoneBook();

const createPhotoAlbum = () => {
  const tenMaleAmericansUrl = "https://randomuser.me/api/?gender=male&results=10&nat=us";
  const datReq = fetch(tenMaleAmericansUrl)
    .then((res) => res.json());

  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const titleRow = document.createElement('tr');
  const title = document.createElement('th');
  title.innerHTML = "User Photo Album";
  title.setAttribute("colspan", "2");
  titleRow.appendChild(title);
  thead.appendChild(titleRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');

  datReq.then((userDat) => {
    const cleanDat = userDat.results.map((user) => {
      return {
        'name': user.name.first + ' ' + user.name.last,
        'picture': user.picture.thumbnail,
      };
    });

    const colLabels = document.createElement('tr');
    for (const prop in cleanDat[0]) {
      const th = document.createElement('th');
      th.innerHTML = `${prop[0].toUpperCase().concat(prop.substr(1))}`;
      colLabels.appendChild(th);
    }
    thead.appendChild(colLabels);

    for (const user of cleanDat) {
      const row = document.createElement('tr');
      row.innerHTML = `
      <td>${user.name}</td>
      <td><img src="${user.picture}" alt="Picture of ${user.name}"></td>
      `;
      tbody.appendChild(row);
    }

    table.appendChild(tbody);
    document.getElementById('main').appendChild(table);
  });
};

createPhotoAlbum();

const logAJoke = async function () {
  const doubleCodeJokeUrl = "https://sv443.net/jokeapi/v2/joke/Programming?format=json&type=twopart";
  const jokeReq = await fetch(doubleCodeJokeUrl);
  const jokeDat = await jokeReq.json();
  console.log(jokeDat.setup);
  console.log(jokeDat.delivery);
};

logAJoke();

const showApiInfo = async() => {
  const jokeInfoReq = await fetch("https://sv443.net/jokeapi/v2/info");
  const jokeInfo = await jokeInfoReq.json();
  const text = document.createElement('p');
  text.innerHTML = jokeInfo.info;
  document.getElementById('main').appendChild(text);
};

showApiInfo();

const response8 = `
  Using async/await seems to be advantageous because it is easier to write, maintain, and debug. While .then() may give a really verbose account of the steps, this is not very helpful. The implied asynchronisity when using 'await' is much more useful. Less is better here.
 `;
