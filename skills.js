let ids = ["software", "web", "admin", "misc"];

for (let id of ids)
{
    let btn = document.getElementById(id);

    if (btn)
        btn.addEventListener("click", () => {

        loadPage(id);
    });
}

// load software.html by default
loadPage("software");

async function loadPage(id)
{
    try
    {    
        let rep = await fetch("./fetched/" + id + ".html");

        if(rep.ok)
        {
            let text = await rep.text();

            if (text)
            {
                document.getElementById("content").innerHTML = text;
            }
        }
    }
    catch(err)
    {
        console.log(err);
    }
}