## 导入arcpy模块
import arcpy.da

## 读取点
~~~
import os
import arcpy
import time
 
def readPoint(fc):
 
    print("读取点几何开始运行")
    flag = 1
    #for row in arcpy.da.SearchCursor(fc, ["SHAPE@XY"]):
    with arcpy.da.SearchCursor(fc,["SHAPE@XY"]) as cursor:
        for row in cursor:
            print("这是第" + str(flag) + "个点要素")
            flag += 1
            # 打印每个点要素的x，y坐标
            x, y = row[0]
            print("{}, {}".format(x, y))
 
 
if __name__ == '__main__':
    print("程序开始运行")
    s_time=time.time()
    
    datadir = r'E:\data\test' #文件根目录
    pointFile = datadir + os.sep + 'point.shp'#点shp文件名
    readPoint(pointFile)#读取点几何数据
    e_time=time.time()
    print("程序共耗时： %.2f s!" % (e_time - s_time))

~~~


## 读取折线或面几何坐标的获取
~~~
import arcpy
import time
    
def readPolygonAndPolyline(fc):
 
    print("读取面或者线几何开始运行")
    #for row in arcpy.da.SearchCursor(fc, ["OID@", "SHAPE@"]):
    with arcpy.da.SearchCursor(fc, ["OID@", "SHAPE@"]) as cursor:
        for row in cursor:
            # 打印当前要素的ID（即属性列表的记录个数，比如一个面要素由十个多边形组成）
            print("Feature {}:".format(row[0]))
            
            partnum = 0
            # 分解每个要素的部分（比如环，有内部和外部之分）
            for part in row[1]:
                #打印部分点的编号
                print("Part {}:".format(partnum))
 
                #分别打印每个点
                for pnt in part:
                    if pnt:
                        # 打印当前点的经纬度
                        print("{}, {}".format(pnt.X, pnt.Y))
                    else:
                        # 如果pnt为空，则表示一个内部环
                        print("Interior Ring:")
                partnum += 1
 
if __name__ == '__main__':
    print("程序开始运行")
    s_time=time.time()
    
    datadir = r'E:\data\test' #文件根目录
    polylineFile = datadir + os.sep + 'line.shp'#折线几何shp文件
    polygonFile = datadir + os.sep + 'polygon.shp'#面几何shp文件
 
    readPolygonAndPolyline(polylineFile)#读取面几何数据
    readPolygonAndPolyline(polygonFile)#读取面几何数据
    
    e_time=time.time()
    print("程序共耗时： %.2f s!" % (e_time - s_time)) 

~~~
## 结果
Feature 0: 
Part 0:
3.0 8.0
1.08.020 10.0
3.0 8.0 
Feature 1: 
Part 0:
5.0 3.0
3.0 3.0
3.0 5.0
5.0 3.0 
Part 1:
7.0 5.0
5.0 5.0
5.0 7.0
7.0 5.0 
Feature 2: 
Part 0:
9.0 11.0
9.0 8.0
6.0 8.0
6.0 11.0
9.0 11.0
Interior Ring:
7.0 10.0
7.0 9.0
8.0 9.0
8.0 10.0
7.0 10.0

## 参考
https://blog.csdn.net/zhoujiaaw/article/details/103859273