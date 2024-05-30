import { memo, useMemo } from "react";

import { IconPlus } from "@arco-design/web-react/icon";

import ContentQualityItem from "./ContentQualityItem";
import ServiceOpening from "./ServiceOpeningItem";
import { RulePresetInterface, ServiceOpeningInterface } from "src/Core";
import RulePresetItem from "./RulePresetItem";

interface Props {
    contentQuality?: boolean;
    serviceOpening?: boolean;
    rulePreset?: boolean;
}

function AllCardList({ contentQuality, serviceOpening, rulePreset }: Props) {
    const contentQualityItems = useMemo(
        () => [
            {
                title: "纯文本-内容版权",
                time: "2024-05-06 10:46:26",
                number1: 317,
                number2: 48,
                number3: 60,
            },
            {
                title: "图文类-内容版权",
                time: "2024-05-01 10:46:26",
                number1: 369,
                number2: 163,
                number3: 84,
            },
            {
                title: "图文类-敏感内容",
                time: "2024-04-30 10:46:26",
                number1: 419,
                number2: 153,
                number3: 16,
            },
            {
                title: "纯文本-历史导入",
                time: "2024-05-19 10:46:26",
                number1: 388,
                number2: 62,
                number3: 8,
            },
            {
                title: "纯文本-敏感内容",
                time: "2024-05-07 10:46:26",
                number1: 359,
                number2: 169,
                number3: 5,
            },
            {
                title: "图文类-敏感内容",
                time: "2024-05-07 10:46:26",
                number1: 178,
                number2: 21,
                number3: 91,
            },
            {
                title: "纯文本-敏感内容",
                time: "2024-05-15 10:46:26",
                number1: 195,
                number2: 181,
                number3: 92,
            },
            {
                title: "图文类-历史导入",
                time: "2024-05-01 10:46:26",
                number1: 115,
                number2: 191,
                number3: 40,
            },
            {
                title: "纯文本-商业品牌",
                time: "2024-04-30 10:46:26",
                number1: 465,
                number2: 188,
                number3: 89,
            },
            {
                title: "纯文本-敏感内容",
                time: "2024-05-14 10:46:26",
                number1: 312,
                number2: 17,
                number3: 43,
            },
        ],
        []
    );

    const serviceOpeningItems: ServiceOpeningInterface[] = useMemo(
        () => [
            {
                title: "资源分发",
                content:
                    "移动端动态化资源分发解决方案。提供稳定大流量服务支持、灵活定制的分发圈选规则，通过离线化预加载。",
                status: "opened",
            },
            {
                title: "资源分发",
                content:
                    "移动端动态化资源分发解决方案。提供稳定大流量服务支持、灵活定制的分发圈选规则，通过离线化预加载。",
                status: "opened",
            },
            {
                title: "用户分布",
                content:
                    "移动端动态化资源分发解决方案。提供稳定大流量服务支持、灵活定制的分发圈选规则，通过离线化预加载",
                status: "opened",
            },
            {
                title: "用户画像分析",
                content:
                    "用户画像就是将典型用户信息标签化，根据用户特征、业务场景和用户行为等信息，构建一个标签化的用户模型。",
                status: "opened",
            },
            {
                title: "事件分析",
                content:
                    "事件分析即可进行筛选、分组、聚合的灵活多维数据分析。详情请点击卡片。",
                status: "opened",
            },
            {
                title: "资源分发",
                content:
                    "移动端动态化资源分发解决方案。提供稳定大流量服务支持、灵活定制的分发圈选规则，通过离线化预加载。",
                status: "opened",
            },
            {
                title: "用户画像分析",
                content:
                    "用户画像就是将典型用户信息标签化，根据用户特征、业务场景和用户行为等信息，构建一个标签化的用户模型。",
                status: "opened",
            },
            {
                title: "用户画像分析",
                content:
                    "用户画像就是将典型用户信息标签化，根据用户特征、业务场景和用户行为等信息，构建一个标签化的用户模型。",
                status: "expire",
            },
            {
                title: "资源分发",
                content:
                    "移动端动态化资源分发解决方案。提供稳定大流量服务支持、灵活定制的分发圈选规则，通过离线化预加载。",
                status: "expire",
            },
            {
                title: "用户画像分析",
                content:
                    "用户画像就是将典型用户信息标签化，根据用户特征、业务场景和用户行为等信息，构建一个标签化的用户模型。",
                status: "opened",
            },
        ],
        []
    );

    const rulePresetItems: RulePresetInterface[] = useMemo(
        () => [
            {
                title: "内容分发规则",
                content: "内容分发时，对某些内容需要固定在C端展示的位置。",
                status: "activated",
            },
            {
                title: "内容加权规则",
                content:
                    "选定内容加权规则后可自定义从不同内容集合获取内容的概率。",
                status: "activated",
            },
            {
                title: "内容分发规则",
                content: "内容分发时，对某些内容需要固定在C端展示的位置。",
                status: "none",
            },
            {
                title: "内容置顶规则",
                content:
                    "该规则支持用户在执行特定内容分发任务时，对固定的几条内容置顶。",
                status: "none",
            },
            {
                title: "内容置顶规则",
                content:
                    "该规则支持用户在执行特定内容分发任务时，对固定的几条内容置顶。",
                status: "activated",
            },
            {
                title: "内容分发规则",
                content: "内容分发时，对某些内容需要固定在C端展示的位置。",
                status: "activated",
            },
            {
                title: "内容置顶规则",
                content:
                    "该规则支持用户在执行特定内容分发任务时，对固定的几条内容置顶。",
                status: "none",
            },
            {
                title: "内容加权规则",
                content:
                    "选定内容加权规则后可自定义从不同内容集合获取内容的概率。",
                status: "activated",
            },
            {
                title: "内容置顶规则",
                content:
                    "该规则支持用户在执行特定内容分发任务时，对固定的几条内容置顶。",
                status: "none",
            },
            {
                title: "内容分发规则",
                content: "内容分发时，对某些内容需要固定在C端展示的位置。",
                status: "activated",
            },
        ],
        []
    );

    return (
        <div>
            {contentQuality && (
                <div>
                    <h2 className="mt-6 font-semibold">Content quality</h2>
                    <div className="grid grid-cols-12 gap-8 py-STANDARDMARGINANDPADDING">
                        <div className="cursor-pointer col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3 [&_.arco-card-body]:p-0 [&_.cardDropDown]:hover:block hover:shadow-md p-STANDARDMARGINANDPADDING border border-solid rounded-sm">
                            <div className="w-full h-full flex flex-col justify-center items-center gap-STANDARDMARGINANDPADDING">
                                <IconPlus className="opacity-80" />
                                <span className="opacity-55">
                                    Create quality inspection queue
                                </span>
                            </div>
                        </div>
                        {contentQualityItems.map((item, index) => (
                            <div
                                className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3"
                                key={index}
                            >
                                <ContentQualityItem {...item} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {serviceOpening && (
                <div>
                    <h2 className="mt-6 font-semibold">Service Opening</h2>
                    <div className="grid grid-cols-12 gap-8 py-STANDARDMARGINANDPADDING">
                        {serviceOpeningItems.map((item, index) => (
                            <div
                                className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3"
                                key={index}
                            >
                                <ServiceOpening
                                    title={item.title}
                                    content={item.content}
                                    status={item.status}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {rulePreset && (
                <div>
                    <h2 className="mt-6 font-semibold">Rule Presets</h2>
                    <div className="grid grid-cols-12 gap-8 py-STANDARDMARGINANDPADDING">
                        {rulePresetItems.map((item, index) => (
                            <div
                                className="col-span-12 sm:col-span-6 md:col-span-4 xl:col-span-3"
                                key={index}
                            >
                                <RulePresetItem
                                    title={item.title}
                                    content={item.content}
                                    status={item.status}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default memo(AllCardList);
