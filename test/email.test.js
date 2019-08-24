import { REG_EMAIL } from '../src/index'

function testEmail(arg) {
  return REG_EMAIL.test(arg)
}

test.each([
  ['name.li@example.com.cn'],
  ['123456789@qq.com'],
  ['abcd2019@163.com'],
  ['name_li@example.com'],
  ['name.li@biz-example.com.cn'],
  ['shelly.x.xiang@cn.example.com'],
  ['Zhou.Vanessa@example.cn'],
  ['name-li@outlook.cn'],
  ['ABCD2019@pingan.com.cn'],
  ['name-zhang@example-chengdu.com'],
  ['xiang-yu.li@example.com'],
  ['123456789@QQ.COM'],
  ['Allen.LiL@Example.com'],
  ['name-Qian.li@example.com']
])('testEmail(%p) => true', arg => {
  expect(testEmail(arg)).toBeTruthy()
})

test.each([
  ['123456789@qq..com'],
  ['邮箱qwerty@example.com'],
  ['123456789@qq.com '],
  ['abcd2019@example.com.'],
  ['123456789@qq. com'],
  ['123456789@@qq.com'],
  ['123456789@.qq.com'],
  ['123456789@ qq.com'],
  ['123456789.@.com'],
  ['qwerty @example.com'],
  ['mailto:name.li@example.com'],
  ['wang. name@example.com.cn'],
  ['123456789，@qq.com'],
  ['123456789.@qq.com'],
  ['Xiao-chun,chen@example.com'],
  ['123456789@123456789@qq.com'],
  ['123456789@qq.com;123456789@qq.com'],
  ['中文name.li@dupont.com'],
  ['（312）123456789@qq.com'],
  ['123456789qq@.com']
])('testEmail(%p) => false', arg => {
  expect(testEmail(arg)).toBeFalsy()
})
