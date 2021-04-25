(function() {
    let y = new Date().getFullYear(); // 当前年份
    let html = '<div class="box">'; // 年历html字符串

    // 拼接每个月份的表格
    for (let m = 1; m <= 12; m++) {
        html += '<table>';
        html += '<tr class="title"><th colspan="7">' + y + ' 年 ' + m + ' 月</th></tr>';
        html += '<tr><td>日</td><td>一</td><td>二</td><td>三</td><td>四</td><td>五</td><td>六</td></tr>';

        // tip：当Date作为构造函数调用并传入多个参数时，如果数值大于合理范围时，相邻的数值会被调整。
        // 获取当前月总共有多少天
        let maxDate = new Date(y, m, 0).getDate();

        // 日期的星期信息
        let w = new Date(y, m - 1, 1).getDay();

        // 如果该月的第1天不是星期日，则填充空白
        html += '<tr>'; // tr开始标签
        if (w) {
            html += '<td colspan="' + w + '"> </td>';
        }

        // 输出当月日期
        for (let d = 1; d <= maxDate; ++d) {
            // 拼接单个日期信息
            html += '<td>' + d + '</td>';

            // 判断是否继续拼接下一星期
            if (w == 6 && d != maxDate) { // 如果星期六不是该月的最后一天，则换行
                html += '</tr><tr>';
            } else if (d == maxDate) { // 该月的最后一天，闭合<tr>标签
                html += '</tr>';
            }

            // 更新日期星期
            w = (w + 1 > 6) ? 0 : w + 1;
        }

        html += '</table>'; // table结束标签
    }

    html += '</div>'; // div结束标签

    // 输出年历html
    document.write(html);
})();