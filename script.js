//first we create the "emojis" variable using the"const" declaration statement and we use the "$" sign to indicate it's an element.
const $emojis = 

// we then retrieve the 'emojis' element by it's 'id'
document.getElementById('emojis')

// We then create a variable called emojis and assign it to an 'empty array([])'
const emojis = []

// since the various emoji decimals can be arranged in a numeric order(1,2,3...) we can use the 'for' loop to easily add the emojis on the page.
// we are also going to push the emojis html structure as a template literal to the array and we use the 'back-tick' to create a template literal
for (let i=128512; i<=129315; i++) {
    emojis.push(`
        <div class='emoji'>
            <div class='emoji'>&#${i}
        </div>
        <div class='emoji-decimal'>${i} 
        </div>
        </div>
    `)
}

//Finally we add the emojis to the page
$emojis.innerHTML +=emojis.join('')