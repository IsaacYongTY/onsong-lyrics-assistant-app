const song = [{
    title:'只是太爱你',
    romTitle: 'Zhi Shi Tai Ai Ni',
    artist: '张敬轩',
    romArtist: 'Zhang Jing Xuan',
    key: 'A',
    tempo: 65,
    duration: '4:30',
    time: '4/4',
    firstAlphabet: ``,
    keywords: 'ballad',
    language: 'chinese',
    lyrics: `作词：张敬轩
作曲：张敬轩
编曲：Johnny Yim
监制：张敬轩 / Johnny Yim

原谅我真的喝醉了　因为我真的想你了
一不小心就被寂寞　吞噬了爱着你的快乐
我知道这样不应该　也知道你会受伤害
只是不想再让自己　对你太过依赖

我明白　你给的爱　是真实地存在
只是我　不懂得如何去爱　才会让你想离开

因为我不知道　下一辈子　还是否能遇见你
所以我今生才会　那么努力　把最好的给你
爱你都变成伤害你　我们的爱快要窒息
不是故意　只是太爱你

原谅我真的喝醉了　因为我真的想你了
更多更详尽歌词 在 ※ Mojim.com　魔镜歌词网 
一不小心就被寂寞　吞噬了爱着你的快乐
我知道这样不应该　也知道你会受伤害
只是不想再让自己　对你太过依赖

我明白　你给的爱　是真实地存在
只是我　不懂得如何去爱　才会让你想离开

因为我不知道　下一辈子　还是否能遇见你
所以我今生才会　那么努力　把最好的给你
爱你都变成伤害你　我们的爱快要窒息
不是故意　只是太爱你

因为我不知道　下一辈子　还是否能遇见你
所以我今生才会　那么努力　把最好的都给你
爱你都变成伤害你　我们的爱快要窒息
不是故意　只是太爱你`
},  {
        title:'Beautiful Soul',
        romTitle: '',
        artist: 'Jesse McCartney',
        romArtist: '',
        key: 'A',
        tempo: 90,
        duration: '3:23',
        time: '4/4',
        firstAlphabet: ``,
        keywords: 'wedding',
        language: 'english',
        lyrics: `[Intro]
I don't want another pretty face
I don't want just anyone to hold
I don't want my love to go to waste
I want you and your beautiful soul

[Verse 1]
I know that you are something special
To you I'd be always faithful
I want to be what you always needed
Then I hope you'll see the heart in me

[Chorus]
I don't want another pretty face
I don't want just anyone to hold
I don't want my love to go to waste
I want you and your beautiful soul
You're the one I wanna chase
You're the one I wanna hold
I won't let another minute go to waste
I want you and your beautiful soul
Your beautiful soul, yeah

[Verse 2]
You might need time to think it over
But I'm just fine moving forward
I'll ease your mind
If you give me the chance
I will never make you cry
C'mon let's try

[Chorus]
I don't want another pretty face
I don't want just anyone to hold
I don't want my love to go to waste
I want you and your beautiful soul
You're the one I wanna chase
You're the one I wanna hold
I won't let another minute go to waste
I want you and your beautiful soul

[Bridge]
Am I crazy for wanting you?
Maybe do you think you could want me too?
I don't wanna waste your time
Do you see things the way I do?
I just wanna know that you feel it too
There is nothing left to hide

[Chorus]
I don't want another pretty face
I don't want just anyone to hold
I don't want my love to go to waste
I want you and your beautiful soul
You're the one I wanna chase
You're the one I wanna hold
I won't let another minute go to waste
I want you and your soul

[Chorus]
I don't want another pretty face
I don't want just anyone to hold
I don't want my love to go to waste
I want you and your beautiful soul

[Outro]
Ooh, your beautiful soul, yeah
Oh, yeah
Your beautiful soul
Yeah
Yeah, yeah, yeah, yeah
Beautiful soul
        `
}]

// const metaTemplate = (song) => {

//     if (song.romTitle.length === 0) {
//         resultTitle = `${song.title}`
//         resultArtist = `${song.artist}`
//     }   else {
//         resultTitle = `${song.romTitle} ${song.title}`
//         resultArtist = `${song.romArtist} ${song.artist}`
//     }
//     return `${resultTitle}
// ${resultArtist}
// Key: ${song.key}
// Tempo: ${song.tempo}
// Duration: ${song.duration}
// Time: ${song.time}
// Keywords: ${song.firstAlphabet}, ${song.language}, ${song.keywords}\n
// `

// }

// const spotifyMetaTemplate = (data) => 
// `
// Key: ${data.key}
// Tempo: ${data.tempo}
// Duration: ${data.duration}
// Time: ${data.time}