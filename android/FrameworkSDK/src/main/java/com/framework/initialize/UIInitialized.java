package com.framework.initialize;

/**
 * package: com.framework.initialize
 * author: MeePwn
 * email: maybewaityou@gmail.com
 * github: https://github.com/maybewaityou
 * date: 2017/1/19 上午9:07
 * desc:
 */

public interface UIInitialized extends Initialize {

    /**
     * 设置 activity 布局
     */
    public void setContentView();

    /**
     * 初始化数据
     */
    public void initData();

    /**
     * 初始化 View
     */
    public void initViews();

    /**
     * 设置 View 相关信息
     */
    public void setupViews();

}
