module.exports = {
    /**
     * 成功返回
     * @param data 返回数据
     * @param msg 消息
     * @param code 状态
     */
    success(data = {}, msg = '成功', code = 200) {
        this.ctx.body = {
            msg, data, code
        };
    },
    /**
     * 失败返回
     * @param data 返回数据
     * @param msg 消息
     * @param code 状态
     */
    error(data = {}, msg = '失败', code = 403) {
        this.ctx.body = {
            msg, data, code
        };
    }
}