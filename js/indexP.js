const inbody = document.getElementsByTagName('body')[0];
inbody.addEventListener('mousemove', function(n)
{
    t.style.top = n.clientY + 'px',
    t.style.left = n.clientX + 'px',
    e.style.top = n.clientY + 'px',
    e.style.left = n.clientX + 'px',
    i.style.top = n.clientY + 'px',
    i.style.left = n.clientX + 'px';
})
var t = document.getElementById('cursor'),
e = document.getElementById('cursor2'),
i = document.getElementById('cursor3');

function n(t)
{
    e.classList.add('hover'), i.classList.add('hover');
}
function s(t)
{
    e.classList.remove('hover'), i.classList.remove('hover');
}
s();
for (var r = document.querySelectorAll('.hover-target'),
a = r.length -1; a>=0; a--)
{
    o(r[a])
}
function o(t)
{
    t.addEventListener('mouseover', n);
    t.addEventListener("mouseout", s)
}