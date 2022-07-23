const createTeam = team => {

    const createManager = manager => {
       return `
    <div class="">
        <div class="">
            <h2 class=""></h2>
            <h3 class=""></h3>
        </div>
        <div class="">
            <ul class="">
                <li class=""></li>
                <li class=""></li>
                <li class=""></li>
            </ul>
        </div>
    </div>
        `;
    };

    const createEngineer = engineer => {
        return `
    <div class="">
        <div class="">
            <h2 class=""></h2>
            <h3 class=""></h3>
        </div>
        <div class="">
            <ul class="">
                <li class=""></li>
                <li class=""></li>
                <li class=""></li>
            </ul>
        </div>
    </div>
        `;
    };

    const createIntern = intern => {
        return `
    <div class="">
        <div class="">
            <h2 class=""></h2>
            <h3 class=""></h3>
        </div>
        <div class="">
            <ul class="">
                <li class=""></li>
                <li class=""></li>
                <li class=""></li>
            </ul>
        </div>
    </div>
        `;
    };

    const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return html.join("");

}

module.exports = team => {

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                <h1 class="text-center text-white">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="row team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};