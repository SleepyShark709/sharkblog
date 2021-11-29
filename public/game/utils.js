const log = console.log.bind(console)

const imageFromPath = (path) => {
    let img = new Image()
    img.src = path
    return img
}
// const reactIntersects = (a, b) => {
//     // 九宫格，左上角碰撞
//     // a.h + a.y > b.y && a.x + a.w > b.x
//     // 最上
//     // a.h + a.y > b.y &&
//     if (b.y >= a.y && b.y <= a.y + a.h && b.x >= a.x && b.x <= a.x + a.w) {
//         return true
//     } else {
//         return false
//     }
// }


// 矩形一 top-left 坐标 (A, B), C 为 width, D 为 height
// 矩形二 同上
// 如果没有相交，返回 [0, 0, 0, 0]
// 如果相交，假设相交矩形对角坐标 (x0, y0) (x1, y1) -- x1 > x0 & y1 > y0
// return [x0, y0, x1, y1]
function check(a, b) {
    let A = a.x
    let B = a.y
    let C = a.w
    let D = a.h
    let E = b.x
    let F = b.y
    let G = b.w
    let H = b.h
    // 转为对角线坐标
    C += A
    D += B
    G += E
    H += F

    // 没有相交
    if (C <= E || G <= A || D <= F || H <= B)
        return [0, 0, 0, 0];

    var tmpX, tmpY;

    if (E > A) {
        tmpX = G < C ? [E, G] : [E, C];
    } else {
        tmpX = C < G ? [A, C] : [A, G];
    }

    if (F > B) {
        tmpY = H < D ? [F, H] : [F, D];
    } else {
        tmpY = D < H ? [B, D] : [B, H];
    }

    return [tmpX[0], tmpY[0], tmpX[1], tmpY[1]];
}

const reactIntersects = function (a, b) {
    var rect = check(a, b)
    var isHit = (rect[2] - rect[0]) * (rect[3] - rect[1]) > 0;
    if (isHit) {
        return true
    } else {
        return false
    }
}

// // 相交矩形坐标信息
// var rect = check(fish.pos.x, fish.pos.y, fish.size.x, fish.size.y,
//     cat.pos.x, cat.pos.y, cat.size.x, cat.size.y);
//
// // 相交面积大于 0 即为碰撞
// var isHit = (rect[2] - rect[0]) * (rect[3] - rect[1]) > 0;

const randomBetween = (start, end) => {
    let n = Math.random() * (end - start + 1)
    return Math.floor(n + start)
}
// const config = {
//     player_speed: 10,
//     cloud_speed: 1,
//     enemy_speed: 5,
//     bullet_speed: 5,
//     fire_cooldown: 9,
// }